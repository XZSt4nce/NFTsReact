import Web3 from "web3";
import abi from "./abi.json";

class Service {
    web3 = new Web3(window.ethereum);
    contractAddress = "0x1cFb8cac8386266dDBEa17E332D5bCc2d64A4280";
    contract = new this.web3.eth.Contract(abi, this.contractAddress);

    isAddress(address) {
        if (Web3.utils.isAddress(address)) {
            return true;
        } else {
            alert("Введите верный адрес");
            return false;
        }
    }

    async activateReferalCode(sender, code) {
        try {
            return await this.contract.methods.activateReferalCode(code).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async addFriend(sender, wallet) {
        try {
            if (this.isAddress(wallet)) {
                return await this.contract.methods.addFriend(wallet).send({from: sender});
            }
        } catch (e) {
            alert(e);
        }
    }

    async bid(sender, index, sum) {
        try {
            return await this.contract.methods.bid(index, sum).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async buyNFT(sender, index, amount) {
        try {
            return await this.contract.methods.buyNFT(index, amount).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async changeSellPrice(sender, index, price) {
        try {
            return await this.contract.methods.changeSellPrice(index, price).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async checkAuctionExpired(sender, index) {
        try {
            return await this.contract.methods.checkAuctionExpired(index).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async createCollectionNFT(sender, title, description, ids) {
        try {
            return await this.contract.methods.createCollectionNFT(title, description, ids).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async createReferal(sender) {
        try {
            return await this.contract.methods.createReferal(sender).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async createSingleNFT(sender, title, description, image, price, issued) {
        try {
            return await this.contract.methods.createSingleNFT(title, description, image, price, issued).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async finishAuction(sender, index) {
        try {
            return await this.contract.methods.finishAuction(index).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async sellNFT(sender, index, amount) {
        try {
            return await this.contract.methods.sellNFT(index, amount).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async startAuction(sender, index, asideTime, duration, startPrice, maxPrice) {
        try {
            return await this.contract.methods.startAuction(index, asideTime, duration, startPrice, maxPrice).send({from: sender});
        } catch (e) {
            alert(e);
        }
    }

    async transferNFT(sender, to, index, amount) {
        try {
            if (this.isAddress(to)) {
                return await this.contract.methods.transferNFT(to, index, amount).send({from: sender});
            }
        } catch (e) {
            alert(e);
        }
    }

    async getActivatedReferal(sender) {
        try {
            return await this.contract.methods.getActivatedReferal().call({from: sender});
        } catch (e) {
            console.log(e);
        }
    }

    async getAsset(id) {
        try {
            return await this.contract.methods.getAsset(id).call();
        } catch (e) {
            console.log(e);
        }
    }

    async getAssets() {
        try {
            return await this.contract.methods.getAssets().call();
        } catch (e) {
            console.log(e);
        }
    }

    async getAuctions() {
        try {
            return await this.contract.methods.getAuctions().call();
        } catch (e) {
            console.log(e);
        }
    }

    async getBalance(sender) {
        try {
            return await this.contract.methods.getBalance().call({from: sender});
        } catch (e) {
            console.log(e);
        }
    }

    async getBets(sender, index) {
        try {
            return await this.contract.methods.getBets(index).call({from: sender});
        } catch (e) {
            console.log(e);
        }
    }

    async getCollections() {
        try {
            return await this.contract.methods.getCollections().call();
        } catch (e) {
            console.log(e);
        }
    }

    async getMyBet(sender, index) {
        try {
            return await this.contract.methods.getMyBet(index).call({from: sender});
        } catch (e) {
            console.log(e);
        }
    }

    async getMyCode(sender) {
        try {
            return await this.contract.methods.getMyCode().call({from: sender});
        } catch (e) {
            console.log(e);
        }
    }

    async getMyDiscount(sender) {
        try {
            return await this.contract.methods.getMyDiscount().call({from: sender});
        } catch (e) {
            console.log(e);
        }
    }

    async getMyNFTs(sender) {
        try {
            return await this.contract.methods.getMyNFTs().call({from: sender});
        } catch (e) {
            console.log(e);
        }
    }

    async getOwnerCollections(sender) {
        try {
            return await this.contract.methods.getOwnerCollections().call({from: sender});
        } catch (e) {
            console.log(e);
        }
    }

    async getSells() {
        try {
            return await this.contract.methods.getSells().call();
        } catch (e) {
            console.log(e);
        }
    }

    async getWonLots(sender) {
        try {
            return await this.contract.methods.getWonLots().call({from: sender});
        } catch (e) {
            console.log(e);
        }
    }
}

export default new Service();