# **Decentralized Asset Registry and Trading Platform (DARTP)**  

The **Decentralized Asset Registry and Trading Platform (DARTP)** is a blockchain-based solution designed to streamline the registration, verification, and trading of assets such as real estate, vehicles, or intellectual property. Built on the **Internet Computer Protocol (ICP)**, this platform ensures secure, transparent, and tamper-proof transactions, making asset management and trading more efficient.  

## **Features**  

- **Asset Registration**:  
  Register assets with comprehensive details, including type, value, and ownership information.  

- **Ownership Transfer**:  
  Facilitate secure ownership transfers with blockchain-verified records.  

- **Asset Trading**:  
  Trade registered assets seamlessly via an integrated decentralized marketplace.  

- **Verification System**:  
  Verify asset authenticity using blockchain-backed records.  

- **Candid Backend Interface**:  
  Administrators and advanced users can interact with backend operations directly via the **Candid interface**.  

- **Decentralized Infrastructure**:  
  Operates on a blockchain network, ensuring transparency and preventing fraud or unauthorized modifications.  

## **Installation & Setup**  

### **Prerequisites**  
- **DFX**: Install the Dfinity SDK to deploy and interact with ICP canisters.  
- **Node.js**: Required for managing dependencies.  
- **Vite**: For frontend development and build processes.  

### **Steps**  

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/sammy-dev/Decentralized-Asset-Registry-and-Trading-Platform  
   cd Decentralized-Asset-Registry-and-Trading-Platform  
   ```  

2. **Install Dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Deploy Canisters**:  
   Use DFX commands to deploy the frontend and backend canisters to the Internet Computer. Ensure proper permissions and network access.  

4. **Run Frontend Locally**:  
   ```bash  
   npm run dev  
   ```  
   This command starts a development server for local testing of the frontend.  

5. **Access Backend**:  
   Interact with the backend canister directly using the provided Candid interface link.  

---

## **Canister Interaction**  

### **1. Register Asset**  
Users can input detailed information about an asset, including type, value, and ownership details. The backend securely stores this data on the blockchain.  

### **2. Transfer Ownership**  
Asset owners can initiate ownership transfers by selecting the asset and entering recipient details. The backend verifies and records the transaction on the blockchain.  

### **3. Trade Assets**  
Users can list assets for sale or make purchase offers. The platform matches buyers and sellers while ensuring secure transactions through the smart contract.  

### **4. Verify Asset**  
Any user can verify the authenticity of an asset by querying its blockchain records using the asset's unique identifier.  

---

## **Technologies Used**  

- **DFX**: For deploying and interacting with Internet Computer canisters.  
- **Vite**: Provides an optimized development environment for the frontend.  
- **Candid Interface**: Enables direct interactions with the backend smart contract.  
- **ICP Blockchain**: Powers the decentralized asset registry and ensures security and transparency.  

---

## **Contributing**  

Contributions are welcome! Fork the repository, raise issues, or submit pull requests to improve the platform.  

---

## **About**  

- **Project Name**: Decentralized Asset Registry and Trading Platform (DARTP)  
- **Repository**: [GitHub Repository](https://github.com/sammy-dev/Decentralized-Asset-Registry-and-Trading-Platform)  
- **Contributors**:  
  - [Sammy Mulandi (@sammy-dev)](https://github.com/sammy-dev)  
  - [Kelvin Macharia (@gakiokevin)](https://github.com/gakiokevin)  
  - [Ian Muriuki (@ianmuriuki)](https://github.com/ianmuriuki)  

## **Suggested Workflows**  

- Use **DFX** to deploy and manage canisters.  
- Employ **Vite** for rapid frontend development.  
- Leverage the **Candid interface** for advanced backend operations and debugging.  