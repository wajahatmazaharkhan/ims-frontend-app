import Turnstile from "react-turnstile";

export default function TurnstileWidget({ setToken }) {
  return (
    <Turnstile
      sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
      onSuccess={(token) => {
        console.log("Verified Token:", token);
        setToken(token);
      }}
      onError={() => {
        console.log("Verification Failed");
      }}
      onExpire={() => {
        console.log("Token Expired");
      }}
    />
  );
}
