let theUrl = document.location.origin + ":5001";
if (theUrl.indexOf("-80.direct")>=0){
  theUrl = theUrl.replace("-80.direct","-5001.direct").split(":5")[0];
}
