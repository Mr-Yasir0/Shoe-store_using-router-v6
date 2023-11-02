import axios from "axios";
// const options = {
//   method: "GET",
//   url: "https://shoes-collections.p.rapidapi.com/shoes/3",
//   headers: {
//     "X-RapidAPI-Key": "fabadc432amsh0dc6d07dce63ff3p13d253jsn133d5d847166",
//     "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
//   },
// };

// const options ={
//     fetch()
// 	.then(response => response.json())
// 	.then(json => console.log(json))
// }

export const globleData = async () => {
  try {
    const response = await axios.request(
      "https://api.storerestapi.com/products/running-sneaker"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
