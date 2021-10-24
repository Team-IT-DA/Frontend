import AWS from "aws-sdk";

require("dotenv").config();

const albumBucketName = process.env.REACT_APP_BUCKET_NAME;
const bucketRegion = process.env.REACT_APP_BUCKET_REGION;
const IdentityPoolId = process.env.REACT_APP_IDENTIFY_POOL_ID;

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId ? IdentityPoolId : "",
  }),
});

type AWSUploadResponse = {
  isSuccess: boolean;
  fileName: string;
};

export const s3 = new AWS.S3({
  apiVersion: "2012-10-17",
  params: { Bucket: albumBucketName },
});

export const addPhoto = (files: any): AWSUploadResponse => {
  if (!files.length) {
    alert("Please choose a file to upload first.");
    return {
      isSuccess: false,
      fileName: "",
    };
  }
  const file: any = files[0];
  const fileName: string = file.name;

  const type: string = fileName.split(".")[1];

  const photoKey: string = fileName;

  s3.putObject(
    {
      Bucket: albumBucketName ? albumBucketName : "",
      Key: photoKey,
      Body: file,
      ACL: "public-read",
      ContentType: `image/${type}`,
    },
    function (err, data) {
      if (err) {
        // @ts-ignore
        alert("There was an error uploading your photo: ", err.message);
        return {
          isSuccess: false,
          fileName: "",
        };
      }
      alert("Successfully uploaded photo.");
    }
  );
  return {
    isSuccess: true,
    fileName,
  };
};
