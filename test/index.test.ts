import newtab from "../src/index";

describe("newtab", () => {
  let createSpy: jest.SpyInstance;
  let clickSpy: jest.SpyInstance;

  beforeEach(() => {
    // spy on createElement to get the actual <a> element
    createSpy = jest.spyOn(document, "createElement");
    // spy on HTMLAnchorElement.prototype.click so it doesn't open real tabs
    clickSpy = jest
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});
  });

  afterEach(() => {
    createSpy.mockRestore();
    clickSpy.mockRestore();
  });

  it("should create an <a> with correct href and target", () => {
    const url = "https://alialmasi.ir";
    newtab(url);

    const a = createSpy.mock.results[0].value as HTMLAnchorElement;

    expect(a.href).toContain(url);
    expect(a.target).toBe("_blank");
    expect(clickSpy).toHaveBeenCalled();
  });

  it("should create an <a> with full set of attributes", () => {
    const url = "https://alialmasi.ir/fa/icon/";
    newtab(url, {
      rel: "author",
      download: { enable: true },
      type: "image/png",
      hreflang: "fa",
      referrerpolicy: "no-referrer",
    });

    const a = createSpy.mock.results[0].value as HTMLAnchorElement;

    expect(a.href).toContain(url);
    expect(a.target).toBe("_blank");
    expect(a.rel).toBe("author");
    expect(a.type).toBe("image/png");
    expect(a.hreflang).toBe("fa");
    expect(a.getAttribute("referrerpolicy")).toBe("no-referrer");
    expect(clickSpy).toHaveBeenCalled();
  });
});
