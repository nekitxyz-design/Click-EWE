import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { MessageCircle, Mail, Instagram, Phone } from "lucide-react";

export const Iphone = (): JSX.Element => {
  // Contact options data for mapping with fallback icons
  const contactOptions = [
    {
      name: "Open Website",
      icon: "./website.svg",
      bgColor: "bg-[#000000]",
      id: "website",
      fallbackIcon: MessageCircle,
      fallbackColor: "text-blue-500",
    },
    {
      name: "Chat via Telegram",
      icon: "./tg.svg",
      bgColor: "bg-[#a3e6fc82]",
      id: "telegram",
      fallbackIcon: MessageCircle,
      fallbackColor: "text-blue-500",
    },
    {
      name: "Chat via WhatsApp",
      icon: "./wa.svg",
      bgColor: "bg-[#dafde382]",
      id: "whatsapp",
      fallbackIcon: MessageCircle,
      fallbackColor: "text-green-500",
    },
    {
      name: "Visit Instagram",
      icon: "./inst.svg",
      bgColor: "bg-[#fddadb82]",
      id: "instagram",
      fallbackIcon: Instagram,
      fallbackColor: "text-pink-500",
    },
    {
      name: "Chat via E-mail",
      icon: "./mail.svg",
      bgColor: "bg-[#ffffff82]",
      id: "email",
      isEmail: true,
      fallbackIcon: Mail,
      fallbackColor: "text-gray-600",
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';
    const fallbackDiv = img.nextElementSibling as HTMLElement;
    if (fallbackDiv) {
      fallbackDiv.style.display = 'flex';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full p-4" style={{ position: 'relative', zIndex: 1 }}>
      <div className="w-full max-w-[393px] min-h-[740px] max-h-[1200px] bg-white rounded-3xl shadow-2xl overflow-hidden relative flex flex-col justify-between">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 z-0"></div>
        <div className="flex flex-col w-full max-w-[325px] items-start gap-4 relative top-[57px] left-1/2 transform -translate-x-1/2 px-4 z-10">
          <div className="w-[138px] h-[138px] rounded-[2px]">
            <img
              className="w-full h-full object-contain"
              alt="EasyWay Europe Logo"
              src="./Logo Main.svg"
              onError={handleImageError}
            />
            <div className="absolute inset-0 hidden items-center justify-center bg-[#314199]">
              <span className="text-white text-lg font-bold">EasyWay</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="self-stretch font-bold text-gray-900 text-[32px] tracking-[-0.32px] leading-[33px] font-['Space_Grotesk',Helvetica]">
            Reach Out in One Click
          </h1>

          {/* Subheading */}
          <p className="self-stretch font-normal text-gray-700 text-[21px] tracking-[-0.21px] leading-normal font-['Roboto',Helvetica]">
            Select your favorite way to get in touch. We&apos;re here to help!
          </p>

          {/* Contact Buttons */}
          {contactOptions.map((option, index) => {
            const FallbackIcon = option.fallbackIcon;
            let link = null;
            if (option.name === "Chat via WhatsApp") {
              link = "https://wa.me/359886173334";
            } else if (option.name === "Chat via Viber") {
              link = "viber://chat?number=359886173334";
            } else if (option.name === "Chat via E-mail") {
              link = "mailto:info@easywayeurope.com";
            } else if (option.name === "Visit Instagram") {
              link = "https://www.instagram.com/easywayeurope/";
            } else if (option.name === "Chat via Telegram") {
              link = "https://t.me/EWE_Chat";
            } else if (option.name === "Open Website") {
              link = "https://easywayeurope.com/";
            }
            const buttonContent = (
              <>
                <div className="relative w-8 h-8 flex items-center justify-center">
                  {option.isEmail ? (
                    <>
                      <img
                        className="w-8 h-8 object-contain"
                        alt="Email icon"
                        src={option.icon}
                        onError={handleImageError}
                      />
                      <div className="absolute w-8 h-8 top-0 left-0 hidden items-center justify-center">
                        <FallbackIcon className={`w-8 h-8 ${option.fallbackColor}`} />
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        className="w-8 h-8 object-contain"
                        alt={option.name}
                        src={option.icon}
                        onError={handleImageError}
                      />
                      <div className="absolute w-8 h-8 hidden items-center justify-center">
                        <FallbackIcon className={`w-8 h-8 ${option.fallbackColor}`} />
                      </div>
                    </>
                  )}
                </div>
                <span className={`flex-1 font-medium text-[22px] tracking-[-0.22px] leading-normal font-['Roboto',Helvetica] text-left ${option.bgColor === "bg-[#000000]" ? "text-white" : "text-gray-900"}`}>
                  {option.name}
                </span>
              </>
            );
            return link ? (
              <a
                key={index}
                id={option.id}
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className="self-stretch w-full"
              >
                <Button
                  variant="ghost"
                  className={`items-center justify-start px-4 py-3 w-full h-auto ${option.bgColor} rounded-[10px] overflow-hidden backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)] flex gap-4 hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md`}
                >
                  {buttonContent}
                </Button>
              </a>
            ) : (
              <Button
                key={index}
                id={option.id}
                variant="ghost"
                className={`items-center justify-start px-4 py-3 self-stretch w-full h-auto ${option.bgColor} rounded-[10px] overflow-hidden backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)] flex gap-4 hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md`}
              >
                {buttonContent}
              </Button>
            );
          })}
        </div>
      </div>
      {/* Футер под карточкой, с отступом сверху */}
      <footer className="w-full flex justify-center mt-6 mb-4">
        <p className="bg-white/80 rounded px-4 py-2 text-center font-normal text-gray-600 text-sm tracking-[-0.14px] leading-normal font-['Roboto',Helvetica] shadow-md max-w-[360px] w-[90vw]">
          All rights reserved. © easywayeurope.com 2020-2025.
        </p>
      </footer>
    </div>
  );
};