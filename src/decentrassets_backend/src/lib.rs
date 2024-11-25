#[macro_use]
extern crate serde;
use candid::{Decode, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, Cell, DefaultMemoryImpl, StableBTreeMap, Storable};
use std::{borrow::Cow, cell::RefCell};

// Define type aliases for better readability
type Memory = VirtualMemory<DefaultMemoryImpl>;
type IdCell = Cell<u64, Memory>;

#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct Asset {
     id: u64,
     owner_id: u64,
     type_: String,
     name: String,
     value: u64,
     status: String,
     description: String,
     owner: String,
}

impl Storable for Asset {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Asset {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define Transfer Asset struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct AssetTransfer {
     id: u64,
     asset_id: u64,
     buyer_id: u64,
     owner_id: u64,
     agreed_price: u64,
     transfer_status: String,
}

impl Storable for AssetTransfer {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for AssetTransfer {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define AssetOwner struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct AssetOwner {
     id: u64,
     assetowneridentity_id: String,
     name: String,
     email: String,
     phone: String,
     is_verified: bool,
}

impl Storable for AssetOwner {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for AssetOwner {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define Trader struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct Buyer {
     id: u64,
     buyeridentity_id: String,
     name: String,
     email: String,
     phone: String,
}

impl Storable for Buyer {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Buyer {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define BuyerIdentity struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct BuyerIdentity {
     id: u64,
     principal: String, // Principal associated with the buyer
}

// Implementation for BuyerIdentity
impl Storable for BuyerIdentity {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for BuyerIdentity {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define AssetownerIdentity struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct AssetOwnerIdentity {
     id: u64,
     principal: String, // Principal associated with the landowner
}

// Implementation for AssetOwnerIdentity
impl Storable for AssetOwnerIdentity {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for AssetOwnerIdentity {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Error handling
#[derive(candid::CandidType, Deserialize, Serialize)]
enum Error {
    NotFound { msg: String },
    InvalidInput { msg: String },
    Unauthorized { msg: String },
    TransferConflict { msg: String },
    AlreadyExists { msg: String },
}

// Thread-local variables for managing memory and stable storage.
thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> = RefCell::new(
        MemoryManager::init(DefaultMemoryImpl::default())
    );

    static ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), 0)
            .expect("Cannot create a counter")
    );
    static ASSET_STORAGE: RefCell<StableBTreeMap<u64, Asset, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1)))
    ));
    static OWNER_STORAGE: RefCell<StableBTreeMap<u64, AssetOwner, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2)))
    ));

    static BUYER_STORAGE: RefCell<StableBTreeMap<u64, Buyer, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(3)))
    ));
    
    static TRANSFER_STORAGE: RefCell<StableBTreeMap<u64, AssetTransfer, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(4)))
    ));
    static BUYER_IDENTITY_STORAGE: RefCell<StableBTreeMap<u64, BuyerIdentity, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(5)))
    ));
    
    static OWNER_IDENTITY_STORAGE: RefCell<StableBTreeMap<u64, AssetOwnerIdentity, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(6)))
    ));
}

#[ic_cdk::update]
fn add_asset(
    owner_id: u64,
    type_: String,
    name: String,
    value: u64,
    status: String,
    description: String,
    owner: String,
) -> Result<Asset, Error> {
    let id = ID_COUNTER
    .with(|counter| {
        let current_value = *counter.borrow().get();
        counter.borrow_mut().set(current_value + 1)
    })
    .expect("cannot increment id counter");

    let asset = Asset {
        id,
        owner_id,
        type_,
        name,
        value,
        status,
        description,
        owner,
    };
    ASSET_STORAGE.with(|service| service.borrow_mut().insert(id, asset.clone()));
    Ok(asset)
}

#[ic_cdk::query]
fn get_asset(id: u64) -> Result<Asset, Error> {
    match ASSET_STORAGE.with(|service| service.borrow().get(&id)) {
        Some(asset) => Ok(asset.clone()),
        None => Err(Error::NotFound {
            msg: format!("Asset with id={} not found", id),
        }),
    }
}

#[ic_cdk::update]
fn update_asset(id: u64, owner_id: Option<u64>, type_: Option<String>, name: Option<String>, value: Option<u64>, status: Option<String>, description: Option<String>, owner: Option<String>,) -> Result<Asset, Error> {
    let mut asset = match ASSET_STORAGE.with(|service| service.borrow_mut().get(&id)) {
        Some(asset) => asset.clone(),
        None => return Err(Error::NotFound {
            msg: format!("Asset with id={} not found", id),
        }),
    };
    
    if let Some(own) = owner_id {
        asset.owner_id = own;
    }
    if let Some(typ) = type_ {
        asset.type_ = typ;
    }
    if let Some(n) = name {
        asset.name = n;
    }
    if let Some(desc) = description {
        asset.description = desc;
    }
    if let Some(v) = value {
        asset.value = v;
    }
    if let Some(st) = status {
        asset.status = st;
    }
    
    if let Some(ow) = owner {
        asset.owner = ow;
    }
    ASSET_STORAGE.with(|service| service.borrow_mut().insert(id, asset.clone()));
    Ok(asset)
}

#[ic_cdk::update]
fn delete_asset(id: u64) -> Result<(), Error> {
    match ASSET_STORAGE.with(|service| service.borrow_mut().remove(&id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Asset with id={} not found", id),
        }),
    }
}

#[ic_cdk::update]
fn add_owner(
    assetowneridentity_id: String,
    name: String,
    email: String,
    phone: String,
) -> Result<AssetOwner, Error> {
    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let owner = AssetOwner {
        id,
        assetowneridentity_id,
        name,
        email,
        phone,
        is_verified: false,
    };

    OWNER_STORAGE.with(|service| service.borrow_mut().insert(id, owner.clone()));
    Ok(owner)
}

#[ic_cdk::update]
fn update_owner(
    id: u64,
    name: Option<String>,
    email: Option<String>,
    phone: Option<String>,
) -> Result<AssetOwner, Error> {
    let mut owner = match OWNER_STORAGE.with(|service| service.borrow_mut().get(&id)) {
        Some(owner) => owner.clone(),
        None => return Err(Error::NotFound {
            msg: format!("assetowner with id={} not found", id),
        }),
    };
    if let Some(name) = name {
        owner.name = name;
    }
    if let Some(email) = email {
        owner.email = email;
    }
    if let Some(phone) = phone {
        owner.phone = phone;
    }
    OWNER_STORAGE.with(|service| service.borrow_mut().insert(id, owner.clone()));
    Ok(owner)
}

#[ic_cdk::query]
fn get_owner(assetowner_identity_id: u64) -> Result<AssetOwner, Error> {
    match _get_owner(&assetowner_identity_id) {
        Some(owner) => Ok(owner),
        None => Err(Error::NotFound {
            msg: format!("Owner with assetowner_identity_id={} not found", assetowner_identity_id),
        }),
    }
}

#[ic_cdk::update]
fn delete_owner(id: u64) -> Result<(), Error> {
    match OWNER_STORAGE.with(|service| service.borrow_mut().remove(&id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Owner with id={} not found", id),
        }),
    }
}

// CRUD operations for Buyers
#[ic_cdk::update]
fn add_buyer(buyeridentity_id: String, name: String, email: String, phone: String) -> Result<Buyer, Error> {
    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let buyer = Buyer {
        id,
        buyeridentity_id,
        name,
        email,
        phone,
    };

    BUYER_STORAGE.with(|service| service.borrow_mut().insert(id, buyer.clone()));
    Ok(buyer)
}

// Get Buyer by buyer_identity_id
#[ic_cdk::query]
fn get_buyer(buyer_identity_id: u64) -> Result<Buyer, Error> {
    match _get_buyer(&buyer_identity_id) {
        Some(buyer) => Ok(buyer),
        None => Err(Error::NotFound {
            msg: format!("Buyer with buyer_identity_id={} not found", buyer_identity_id),
        }),
    }
}

#[ic_cdk::update]
fn update_buyer(id: u64, name: Option<String>, email: Option<String>, phone: Option<String>) -> Result<Buyer, Error> {
    let mut buyer = match BUYER_STORAGE.with(|service| service.borrow_mut().get(&id)) {
        Some(b) => b.clone(),
        None => return Err(Error::NotFound {
            msg: format!("Buyer with id={} not found", id),
        }),
    };

    if let Some(n) = name {
        buyer.name = n;
    }
    if let Some(e) = email {
        buyer.email = e;
    }
    if let Some(p) = phone {
        buyer.phone = p;
    }

    BUYER_STORAGE.with(|service| service.borrow_mut().insert(id, buyer.clone()));
    Ok(buyer)
}

#[ic_cdk::update]
fn delete_buyer(id: u64) -> Result<(), Error> {
    match BUYER_STORAGE.with(|service| service.borrow_mut().remove(&id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Buyer with id={} not found", id),
        }),
    }
}

#[ic_cdk::update]
fn transfer_asset(
    asset_id: u64,
    buyer_id: u64,
    owner_id: u64,
    agreed_price: u64,
) -> Result<AssetTransfer, Error> {
    let id = ID_COUNTER
    .with(|counter| {
        let current_value = *counter.borrow().get();
        counter.borrow_mut().set(current_value + 1)
    })

    .expect("cannot increment id counter");

    let transfer = AssetTransfer {
        id,
        asset_id,
        buyer_id,
        owner_id,
        agreed_price,
        transfer_status: "Pending".to_string(),
    };

    // Record the transfer
    TRANSFER_STORAGE.with(|service| service.borrow_mut().insert(id, transfer.clone()));
    Ok(transfer)
}

#[ic_cdk::update]
fn update_transfer_asset(id: u64, buyer_id: Option<u64>, owner_id: Option<u64>, agreed_price: Option<u64>, transfer_status: Option<String>) -> Result<AssetTransfer, Error> {
    let mut transfer = match TRANSFER_STORAGE.with(|service| service.borrow_mut().get(&id)) {
        Some(transfer) => transfer.clone(),
        None => return Err(Error::NotFound {
            msg: format!("Asset transfer with id={} not found", id),
        }),
    };

    if let Some(b) = buyer_id {
        transfer.buyer_id = b;
    }
    if let Some(o) = owner_id {
        transfer.owner_id = o;
    }
    if let Some(p) = agreed_price {
        transfer.agreed_price = p;
    }
    if let Some(s) = transfer_status {
        transfer.transfer_status = s;
    }

    TRANSFER_STORAGE.with(|service| service.borrow_mut().insert(id, transfer.clone()));
    Ok(transfer)
}

#[ic_cdk::query]
fn get_asset_transfer(id: u64) -> Result<AssetTransfer, Error> {
    match TRANSFER_STORAGE.with(|service| service.borrow().get(&id)) {
        Some(transfer) => Ok(transfer.clone()),
        None => Err(Error::NotFound {
            msg: format!("Asset transfer with id={} not found", id),
        }),
    }
}

#[ic_cdk::update]
fn delete_asset_transfer(id: u64) -> Result<(), Error> {
    match TRANSFER_STORAGE.with(|service| service.borrow_mut().remove(&id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("Asset transfer with id={} not found", id),
        }),
    }
}

// Function to add a buyer identity
#[ic_cdk::update]
fn add_buyer_identity(principal: String) -> Result<BuyerIdentity, Error> {
    // Validate input data
    if principal.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Principal cannot be empty".to_string(),
        });
    }

    // Check if the principal already exists
    let exists = BUYER_IDENTITY_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .any(|(_, buyeridentity)| buyeridentity.principal == principal)
    });

    if exists {
        return Err(Error::AlreadyExists {
            msg: "Principal already exists".to_string(),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let buyeridentity = BuyerIdentity { id, principal };

    BUYER_IDENTITY_STORAGE.with(|service| service.borrow_mut().insert(id, buyeridentity.clone()));
    Ok(buyeridentity)
}

// Function to get a buyer identity by its ID
#[ic_cdk::query]
fn get_buyer_identity(buyeridentity_id: u64) -> Result<BuyerIdentity, Error> {
    match BUYER_IDENTITY_STORAGE.with(|storage| storage.borrow().get(&buyeridentity_id)) {
        Some(buyeridentity) => Ok(buyeridentity.clone()),
        None => Err(Error::NotFound {
            msg: format!("BuyerIdentity with id={} not found", buyeridentity_id),
        }),
    }
}

// Function to delete a buyer identity
#[ic_cdk::update]
fn delete_buyer_identity(buyeridentity_id: u64) -> Result<(), Error> {
    match BUYER_IDENTITY_STORAGE.with(|service| service.borrow_mut().remove(&buyeridentity_id)) {
        Some(_) => Ok(()),
        None => Err(Error::NotFound {
            msg: format!("BuyerIdentity with id={} not found", buyeridentity_id),
        }),
    }
}

// Function to add a assetowner identity
#[ic_cdk::update]
fn add_assetowner_identity(principal: String) -> Result<AssetOwnerIdentity, Error> {
    // Validate input data
    if principal.is_empty() {
        return Err(Error::InvalidInput {
            msg: "Principal cannot be empty".to_string(),
        });
    }

    // Check if the principal already exists
    let exists = OWNER_IDENTITY_STORAGE.with(|service| {
        service
            .borrow()
            .iter()
            .any(|(_, assetowneridentity)| assetowneridentity.principal == principal)
    });

    if exists {
        return Err(Error::AlreadyExists {
            msg: "Principal already exists".to_string(),
        });
    }

    let id = ID_COUNTER
        .with(|counter| {
            let current_value = *counter.borrow().get();
            counter.borrow_mut().set(current_value + 1)
        })
        .expect("cannot increment id counter");

    let assetowneridentity = AssetOwnerIdentity { id, principal };

    OWNER_IDENTITY_STORAGE.with(|service| service.borrow_mut().insert(id, assetowneridentity.clone()));
    Ok(assetowneridentity)
}

// Function to get a assetowner identity by its ID
#[ic_cdk::query]
fn get_assetowner_identity(assetowneridentity_id: u64) -> Result<AssetOwnerIdentity, Error> {
    match OWNER_IDENTITY_STORAGE.with(|storage| storage.borrow().get(&assetowneridentity_id)) {
        Some(assetowneridentity) => Ok(assetowneridentity.clone()),
        None => Err(Error::NotFound {
            msg: format!("AssetOwnerIdentity with id={} not found", assetowneridentity_id),
        }),
    }
}

// Helper function to retrieve assetownerIdentity by ID
fn _get_assetowner_identity(assetowneridentity_id: &u64) -> Option<AssetOwnerIdentity> {
    OWNER_IDENTITY_STORAGE.with(|service| service.borrow().get(assetowneridentity_id))
}

// Helper function to retrieve Buyer by buyer_identity_id
fn _get_buyer(buyer_identity_id: &u64) -> Option<Buyer> {
    BUYER_STORAGE.with(|service| service.borrow().get(buyer_identity_id))
}

// Helper function to retrieve BuyerIdentity by ID
fn _get_buyer_identity(buyeridentity_id: &u64) -> Option<BuyerIdentity> {
    BUYER_IDENTITY_STORAGE.with(|service| service.borrow().get(buyeridentity_id))
}
// Helper function to retrieve assetowner by assetowner_identity_id
fn _get_owner(assetowner_identity_id: &u64) -> Option<AssetOwner> {
    OWNER_STORAGE.with(|service| service.borrow().get(assetowner_identity_id))
}

// Helper functions to get specific entries
fn _get_asset(asset_id: &u64) -> Option<Asset> {
    ASSET_STORAGE.with(|service| service.borrow().get(asset_id))
}
fn _get_asset_transfer(asset_transfer_id: &u64) -> Option<AssetTransfer> {
    TRANSFER_STORAGE.with(|service| service.borrow().get(asset_transfer_id))
}
// Export Candid interface
ic_cdk::export_candid!();
