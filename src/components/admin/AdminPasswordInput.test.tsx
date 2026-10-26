import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { describe, expect, it } from "vitest";
import { theme } from "@/styles/theme";
import AdminPasswordInput from "@/components/admin/AdminPasswordInput";

describe("AdminPasswordInput", () => {
  it("처음엔 가려 두고, 버튼으로 보이기·숨기기를 바꾼다(폼 제출 버튼이 아니다)", () => {
    render(
      <ThemeProvider theme={theme}>
        <form>
          <AdminPasswordInput value="secret!1" onChange={() => {}} placeholder="비번" />
        </form>
      </ThemeProvider>,
    );
    const input = screen.getByPlaceholderText("비번");
    expect(input).toHaveAttribute("type", "password");

    const toggle = screen.getByRole("button", { name: "비밀번호 보기" });
    expect(toggle).toHaveAttribute("type", "button");
    fireEvent.click(toggle);
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveValue("secret!1");

    fireEvent.click(screen.getByRole("button", { name: "비밀번호 숨기기" }));
    expect(input).toHaveAttribute("type", "password");
  });
});
