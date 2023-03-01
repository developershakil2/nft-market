const fetchNFTs = async () => {
    try {
      // if (currentAccount
      // const web3Modal = new Web3Modal();
      // const connection = await web3Modal.connect();
      // const provider = new ethers.providers.Web3Provider(connection);) {

      // const provider = new ethers.providers.JsonRpcProvider(
      //   "https://bsc-dataseed.binance.org/"
      // );
      'https://bsc-dataseed.binance.org/'
      const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');

      console.log(provider);
      const contract = fetchContract(provider);
      // const contract = fetchContract(provider);

      const data = await contract.fetchMarketItems();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI, {});
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      console.log(items);
      return items;

      // }
    } catch (error) {
      // setError("Error while fetching NFTS");
      // setOpenError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    // if (currentAccount) {
    fetchNFTs();
    // }
  }, []);