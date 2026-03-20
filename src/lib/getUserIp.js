import { headers } from "next/headers";

export const getUserIp = async () => {
  const header = await headers();

  const ip =
    header.get("x-forwarded-for") || header.get("x-real-ip") || "0.0.0.0";

  let realIp = ip.split(",")[0].trim();

  // Fallback if localhost
  if (realIp === "::1" || realIp === "127.0.0.1") {
    realIp = "8.8.8.8"; // set to google ip for development
  }

  let response = {
    success: true,
    code: 200,
    data: null,
  };

  try {
    const res = await fetch(
      `${process.env.GEO_BASE_URL}/country,city/?apiKey=${process.env.GEO_API_KEY}&ipAddress=${realIp}`,
      { cache: "no-store" },
    );
    const json = await res.json();

    if (!res.ok) {
      response = {
        success: false,
        code: res.status,
        data: json,
      };
    } else {
      response = {
        success: true,
        code: res.status,
        data: json,
      };
    }
  } catch (error) {
    response = {
      success: false,
      code: 500,
      data: null,
    };
  }

  return response;
};
