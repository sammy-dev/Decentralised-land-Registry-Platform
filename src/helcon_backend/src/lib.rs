#[macro_use]
extern crate serde;
use candid::{Decode, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, Cell, DefaultMemoryImpl, StableBTreeMap, Storable};
use std::{borrow::Cow, cell::RefCell};

// Define type aliases for better readability
type Memory = VirtualMemory<DefaultMemoryImpl>;
type IdCell = Cell<u64, Memory>;

// Define LandTitle struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct LandTitle {
    id: u64,
    landowner_id: u64, // Refers to the landowner's ID
    location: String, 
    size: f64, // Size of the land (in acres/hectares)
    description: String,
    registered_at: u64, // Timestamp when the land title was registered
    price: u64, // Price of the land
    is_available: bool, // Whether the land is available for sale
}

impl Storable for LandTitle {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for LandTitle {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define LandTransfer struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct LandTransfer {
    id: u64,
    land_title_id: u64, // Reference to the land title being transferred
    buyer_id: u64, // Reference to the buyer
    landowner_id: u64, // Reference to the seller (landowner)
    agreed_price: u64, // Price agreed upon
    transfer_status: String, // e.g., "Pending", "Completed"
    initiated_at: u64, // Timestamp when transfer was initiated
    approved_at: Option<u64>, // Timestamp when transfer was approved
}

impl Storable for LandTransfer {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for LandTransfer {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define Landowner struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct Landowner {
    id: u64,
    landowneridentity_id: String, // Unique digital identity for landowner
    name: String,
    email: String,
    phone: String,
    land_titles: Vec<u64>, // List of land title IDs owned by the landowner
    is_verified: bool,
}

impl Storable for Landowner {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Landowner {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define Buyer struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct Buyer {
    id: u64,
    buyeridentity_id: String, // Unique digital identity for buyer
    name: String,
    email: String,
    phone: String,
    purchased_land_titles: Vec<u64>, // List of purchased land title IDs
}

impl Storable for Buyer {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Buyer {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define GovernmentOfficial struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct GovernmentOfficial {
    id: u64,
    officialidentity_id: String, // Unique digital identity for government official
    name: String,
    department: String,
    email: String,
    phone: String,
    is_active: bool,
}

impl Storable for GovernmentOfficial {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for GovernmentOfficial {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define Arbitrator struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct Arbitrator {
    id: u64,
    arbitratoridentity_id: String, // Unique digital identity for arbitrator
    name: String,
    expertise: String, // Expertise in arbitration (e.g., land law)
    email: String,
    phone: String,
    is_active: bool,
}

impl Storable for Arbitrator {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Arbitrator {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define Dispute struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct Dispute {
    id: u64,
    land_title_id: u64, // Reference to the land title in dispute
    raised_by: u64, // ID of the user who raised the dispute (landowner, buyer)
    comment: String, // Explanation of the dispute
    created_at: u64, // Timestamp when dispute was created
    resolved_at: Option<u64>, // Timestamp when dispute was resolved
}

impl Storable for Dispute {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Dispute {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}

// Define TransactionRecord struct
#[derive(candid::CandidType, Serialize, Deserialize, Default, Clone)]
struct TransactionRecord {
    id: u64,
    land_title_id: u64, // Land title associated with the transaction
    transaction_type: String, // "Transfer", "Registration", etc.
    timestamp: u64, // Time of transaction
    details: String, // Additional details about the transaction
}

impl Storable for TransactionRecord {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for TransactionRecord {
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

    static LAND_TITLE_STORAGE: RefCell<StableBTreeMap<u64, LandTitle, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1)))
    ));

    static TRANSFER_STORAGE: RefCell<StableBTreeMap<u64, LandTransfer, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2)))
    ));

    static DISPUTE_STORAGE: RefCell<StableBTreeMap<u64, Dispute, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(3)))
    ));

    static TRANSACTION_STORAGE: RefCell<StableBTreeMap<u64, TransactionRecord, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(4)))
    ));
    
    static LANDOWNER_STORAGE: RefCell<StableBTreeMap<u64, Landowner, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(5)))
    ));
    
    static BUYER_STORAGE: RefCell<StableBTreeMap<u64, Buyer, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(6)))
    ));
    
    static GOV_OFFICIAL_STORAGE: RefCell<StableBTreeMap<u64, GovernmentOfficial, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(7)))
    ));
    
    static ARBITRATOR_STORAGE: RefCell<StableBTreeMap<u64, Arbitrator, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(8)))
    ));
}
