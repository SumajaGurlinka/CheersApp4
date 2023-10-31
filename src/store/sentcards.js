import axios from "axios";

export const sentcards = {
  state: {
    sentcardsData: [],
  
  },
  reducers: {
    setSentcards: (state, payload) => {
      return {
        ...state,
        sentcardsData: payload,
      };
    },
   
  },
  effects: (dispatch) => ({
  
  
    getSentCardsAsync: async ({ searchText, pageNumber, pageSize,sortDirection ,sortBy}) => {
      try {
     
        const url =` http://localhost:9090/card/sent-cards?searchText=${searchText}&page=${pageNumber}&Size=${pageSize}&sortDirection=${sortDirection}&sortValue=${sortBy}`;
       
        console.log(url);
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.get(url, config);

        const { data = undefined } = response;

        if (data) {
          dispatch.sentcards.setSentcards(data);
          console.log("sent",data);
        }
      } catch (error) {
        console.log("Api > Error >Login >  ", error.response);
        throw error;
      }
    },
   
  
  }),
  
};
