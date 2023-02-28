const url='https://6298beb2f2decf5bb74a9edb.mockapi.io/feedback'

class BookApi {
    get = async () => {
        //async function to get comments from API and return them as a promise
        try {
          const response = await fetch(url); //await waits for the response to be received before moving to next line
          const data = await response.json(); //await and then convert the response to json
          console.log(data)
          return data; //returning data
        } catch (error) {
          //if error, return error
          console.log("There is an error in the get method", error);
        }
      };
}
export const Api = new BookApi()