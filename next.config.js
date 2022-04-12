/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.designrush.com",
      "designrush.com",
      "airbnb.com",
      "news.airbnb.com",
      "links.papareact.com",
      "papareact.com"
    ],
  },
  env: {
    mapbox_key : "pk.eyJ1IjoidG90YWx4c2oiLCJhIjoiY2wweW5xdnY0MXZyODNsandtZTN3MnF4dyJ9.Z80MGlc2XSRDs-HEIzmnmQ"
  }
};

module.exports = nextConfig;
