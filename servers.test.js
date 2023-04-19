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

  it('should append the Server Name to the Server Table', function() {
    submitServerInfo();
    updateServerTable();
    let serverTr = document.querySelectorAll('#serverTable tbody tr td');
    expect(serverTr.length).toEqual(2);
  
  });

 

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    serverId = 0;
    allServers = {};
  });


});


