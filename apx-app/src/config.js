import { config, S3 } from "aws-sdk";
config.update({
  accessKeyId: "AKIARJNA7UNROYUTAUXV",
  secretAccessKey: "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"
});
var s3 = new S3();
s3.getObject(
  {
    Bucket: "apixio-science-data",
    Key:
      "s3://apixio-science-data/users/mt/pop_insights/2020_02_27_pop_insights_Wellcare_LLF_sample_500.csv "
  },
  function(error, data) {
    if (error != null) {
      alert("Failed to retrieve an object: " + error);
    } else {
      alert("Loaded " + data.ContentLength + " bytes");
      console.log(data.body);
    }
  }
);

// bucket: apixio-science-data
// subkey: users/mt/pop_insights
