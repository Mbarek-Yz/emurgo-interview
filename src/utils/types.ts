export type AuthResult = {
  user: {
    email: string;
    name: string;
    id: string;
    role: string;
    isEmailVerified: boolean;
  };
  tokens: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
};
