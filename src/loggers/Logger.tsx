interface LogMessage {
  id: string;
  datetime: string;
  host: string;
  "user-identifier": string;
  level: number;
  message: string;
}
const myLogger = () => {
  //"24/Jan/2023:14:12:15 +0000"
  const date = new Date();
  const dateStr = date.toLocaleString();

  const msg: LogMessage = {
    id: "434a5f5e-2f5f-11ed-a261-0242ac120002",
    datetime: dateStr,
    host: "127.0.0.1",
    "user-identifier": "Mozilla/5.0 Gecko/20100101 Firefox/64.0",
    level: 100,
    message: "default log message",
  };

  const dataToSend = JSON.stringify(msg);
  fetch("http://localhost:8200/api/v1/ingest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-P-META-meta1": "value1",
      "X-P-TAG-tag1": "value1",
      "X-P-Stream": "demo",
      Authorization: "Basic YWRtaW46YWRtaW4=",
    },
    body: dataToSend,
  }).then((response) => {
    console.log("response", response);
  });
};
export default myLogger;
