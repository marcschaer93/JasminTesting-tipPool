describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    serverNameInput.value = "Marc";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Marc");
  });

  it("should append the Server Name to the Server Table", function () {
    submitServerInfo();
    updateServerTable();
    let serverTr = document.querySelectorAll("#serverTable tbody tr td");
    expect(serverTr.length).toEqual(2);
  });

  it("should increase the serverId by 1", function () {
    let serverId = 0;
    if (serverName !== "") {
      serverId++;
    }
    expect(serverId).toEqual(1);
  });

  it("should update #serverTable on updateServerTable", function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll("#serverTable tbody tr td");
    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerText).toEqual("Marc");
    expect(curTdList[1].innerText).toEqual("$0.00");
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
