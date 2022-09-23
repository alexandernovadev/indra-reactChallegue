import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../../src/components/Modal";

jest.mock("../../src/styles/components/modal.module.css", () => ({
  modal: "modal class success",
}));

describe("Test In Modal Comopnents", () => {
  test("should show display none and class correct", () => {
    const handleIsOpen = jest.fn();
    const dataCholde = <>Hello Test</>;

    render(
      <Modal isOpen={false} children={dataCholde} onClick={handleIsOpen} />
    );

    // screen.debug();
    const modal = screen.getByTestId("modal-test");

    expect(modal.style.display).toBe("none");
    expect(modal.className).toBe("modal class success");
  });

  test("should show display block beacuse isOpen is true", () => {
    const handleIsOpen = jest.fn();
    const dataCholde = <>Hello Test</>;

    render(
      <Modal isOpen={true} children={dataCholde} onClick={handleIsOpen} />
    );

    const modal = screen.getByTestId("modal-test");

    expect(modal.style.display).toBe("block");
  });


});
