describe("Utilities test (with setup and tear-down)", function () {
  beforeEach(() => {
    billAmtInput.value = "150";
    tipAmtInput.value = "15";
    submitPaymentInfo();
  });

  it("should calculate summary of Payments, Tip and average tip percent", () => {
    let summaryTds = document.querySelectorAll("#summaryTable tbody tr td");
    expect(summaryTds.length).toEqual(3);
    expect(summaryTds[0].innerHTML).toEqual("$150");
    expect(summaryTds[1].innerHTML).toEqual("$15");
    expect(summaryTds[2].innerHTML).toEqual("10%");
  });

  it("should calculate Tip percent", () => {
    billAmt = "259";
    tipAmt = "12";

    expect(calculateTipPercent(billAmt, tipAmt)).toEqual(5);
    expect(calculateTipPercent(300, 60)).toEqual(20);
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
