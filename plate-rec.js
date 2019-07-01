// https://westcentralus.api.cognitive.microsoft.com/vision/v1.0
// https://westcentralus.api.cognitive.microsoft.com/vision/v2.0

// Key 1: a2f8b279ad9d4fab83904bed5ee7cc87
// Key 2: dc6d7da4ce6347379f9307fd15b7bcfd

"use strict";

const request = require("request");

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = "a2f8b279ad9d4fab83904bed5ee7cc87";

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase =
  "https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/recognizeText";

const imageUrl =
  "https://lh3.googleusercontent.com/xSEGxQoirmGOoqbU8mMGg1rj82VZnAEMxHdUDeLuLMGDVBNmhZkeeauua4nP8zg1HqTKU2w76OwOxrzttbisOeckZlJyAFBlFCr90Sbtod1W-2ijUiWvxoCi6NZhG6PTFR2k_wYhzzz-jLfCLGRJNTwvAZUh15-gcsnCtjNQuRMaBmwscErX6yMd2qZDHG-T-49pLZFc5vxAyIeVu-m4U5LzFOfC82mQUXQLRu-IW6UjefB7_SZGlhloETQt_q4VZe1KxUIeTHf4pE3iVosiEFuTN6b7mZMH-k4rLOq8hv4Rqie8VxfhbMYP0FvL_i7dAJ1WvE5_zhOXvkFEwl0pWNh4s2_MjFA9D2rxUjDxqF3sEjZ2FEA4ZSPDhx-Z2ryA3kNEL4uJ0N_rmP4b_GrVq8j12TMYYHpTcyxHVVSbow-JcVE0zu4fNHGl0-bab3QG5a6XrV9-GiyeEKYoDYZRu8W8ZUM2rNcAXmfWH_FOAmgNUGcMVd3DgHL-hY_jZ4EvIA34_DitnwgkYhx3tjV7gZwm1uqMx8WFk750e9HIbOkM2F89CN6U4i_00md47uTowsqnvSkFXbzmtKj0Z2Dd8jwfB13aRJ2tFKGRlrv7YtzrrDCr6j-Yy4bxEEYAf9CHoqWfgOtVANXxcQpCYxXHk16j4i-48q_SFPHEBpNNLiIxw5qa2V2UV1I4DNcwwBzDZ3WQgmIPViHQQDFbPrzuDbI8tg=w2393-h1247-no";

// Request parameters.
const params = {
  //   visualFeatures: "Categories,Description,Color",
  //   details: "",
  //   language: "en"
  mode: "Printed"
};

const options = {
  uri: uriBase,
  qs: params,
  body: '{"url": ' + '"' + imageUrl + '"}',
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": subscriptionKey
  }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
    return;
  }
  //   console.log(response);
  console.log(response.status);
  console.log(response.headers["operation-location"]);
  //   let jsonResponse = JSON.stringify(JSON.parse(body), null, "  ");
  //   console.log("JSON Response\n");
  //   console.log(jsonResponse);

  const opts = {
    url: response.headers["operation-location"],
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey
    }
  };

  request(opts, (error, response, body) => {
    let jsonResponse = JSON.stringify(JSON.parse(body), null, "  ");
    console.log("JSON Response\n");
    console.log(jsonResponse);
  });
});
