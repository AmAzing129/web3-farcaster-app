"use client";

import { AuthKitProvider, SignInButton } from "@farcaster/auth-kit";
import { ConnectButton } from "@ant-design/web3";

export default function Login() {
  return (
    <AuthKitProvider config={{}}>
      <ConnectButton />
      <SignInButton />
    </AuthKitProvider>
  );
}
