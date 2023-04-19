describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Marc';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Marc');
  });

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    serverId = 0;
    allServers = {};
  });


});


