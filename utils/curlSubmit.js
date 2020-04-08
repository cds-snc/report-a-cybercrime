const wrapData = (fields) => {
  console.log(Object.entries(fields));

  return (
    Object.entries(fields)
      .map(
        ([key, value]) =>
          `------WebKitFormBoundaryRae6SV5A0TQklBAB\\r\\nContent-Disposition: form-data; name="${key}"\\r\\n\\r\\n"${value}"\\r\\n`
      )
      .join(" ") + `------WebKitFormBoundaryRae6SV5A0TQklBAB--\\r\\n`
  );
};

url = "http://localhost:3000/submit";

headers = `\
-H 'Connection: keep-alive' \
-H 'Cache-Control: max-age=0' \
-H 'Sec-Fetch-Dest: empty' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36' \
-H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryRae6SV5A0TQklBAB' \
-H 'Accept: */*' \
-H 'Origin: http://localhost:3000' \
-H 'Sec-Fetch-Site: same-origin' \
-H 'Sec-Fetch-Mode: cors' \
-H 'Referer: http://localhost:3000/no-referrer' \
-H 'Accept-Language: en-US,en;q=0.9'\
`;

data = wrapData({ "anonymous.anonymous": "anonymousPage.no" });

console.log(`curl ${url} ${headers} --data-binary $'${data}' --compressed`);
