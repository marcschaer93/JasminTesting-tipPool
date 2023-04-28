describe("Payments test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = "150";
    tipAmtInput.value = "15";

    // submitPaymentInfo()
    // let curPayment = createCurPayment();
    // appendPaymentTable(curPayment);
    // updateServerTable();
    // updateSummary();
  });

  it("should show Input payment info", function () {
    expect(billAmtInput.value).toEqual("150");
    expect(tipAmtInput.value).toEqual("15");
  });

  it("should not work with a empty input at paymentInfo", () => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    createCurPayment();

    expect(createCurPayment()).toEqual(undefined);
  });

  it("should show Data in PaymentTable", () => {
    submitPaymentInfo();
    let tableDataList = document.querySelectorAll("#paymentTable tbody tr td");
    expect(tableDataList.length).toEqual(3);
    expect(tableDataList[0].innerText).toEqual("$150");
    expect(tableDataList[1].innerText).toEqual("$15");
    expect(tableDataList[2].innerText).toEqual("10%");
  });

  it("should create payment with input", function () {
    let testPayment = {
      billAmt: "150",
      tipAmt: "15",
      tipPercent: calculateTipPercent(150, 15),
    };
    expect(createCurPayment()).toEqual(testPayment);
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
  });
});
