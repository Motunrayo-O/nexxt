import { Session } from "next-auth";
import { useSession } from "next-auth/react";

type UnauthdSession = {
  status: "unauthenticated";
  data:  null;
};

type AuthdSession = {
  status: "authenticated";
  data: Session;
};

type LoadingSession = {
  status: "loading";
  data: null;
};

export const mockSessionUnauthenticated = (sessionMock: UnauthdSession) => {
  vi.mocked(useSession).mockReturnValue({
    ...sessionMock,
    update: vi.fn(),
  });
};

export const mockSessionAuthenticated = (sessionMock: AuthdSession) => {
  vi.mocked(useSession).mockReturnValue({
    ...sessionMock,
    update: vi.fn(),
  });
};

export const mockSessionLoading = (sessionMock: LoadingSession) => {
  vi.mocked(useSession).mockReturnValue({
    ...sessionMock,
    update: vi.fn(),
  });
};
