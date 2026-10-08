import { Outlet, createFileRoute } from "@tanstack/react-router";
import { YumeHeader } from "@/components/yume/YumeHeader";
import { WhatsAppFloat, YumeFooter } from "@/components/yume/YumeFooter";

export const Route = createFileRoute("/_yume")({
  head: () => ({
    meta: [{ name: "theme-color", content: "#14201A" }],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap",
      },
    ],
  }),
  component: YumeLayout,
});

function YumeLayout() {
  return (
    <div className="bg-cream font-yume-sans text-ink antialiased">
      <YumeHeader />
      <Outlet />
      <YumeFooter />
      <WhatsAppFloat />
    </div>
  );
}
