"use client";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Define the type for an item
type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
  //   color: string;
  quantity: number;
};
interface AnimatedNumberProps {
  value: number;
  className: string;
  duration: number;
}

const AnimatedNumber = ({
  value,
  //   prefix = "$",
  className = "",
  duration = 0.5,
}: AnimatedNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const displayValue = useTransform(motionValue, (latest: number) =>
    latest.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    }),
  );

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: duration,
      ease: "easeInOut",
    });

    return controls.stop;
  }, [value, motionValue, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
};

export const SpendMoney = () => {
  // Initial items with their details
  const initialItems: Item[] = [
    {
      id: 1,
      name: "Bolsa Familia",
      price: 686.1,
      image: "/Esbanjanjavectors/vecBolsa.png",
      //   color: "bg-purple-500",
      quantity: 0,
    },
    {
      id: 3,
      name: "Cesta Basica",
      price: 709.9,
      image: "/Esbanjanjavectors/veccestabasica.png",
      //   color: "bg-red-500",
      quantity: 0,
    },
    {
      id: 8,
      name: "Gravata Zegna",
      price: 1_093,
      image: "/Esbanjanjavectors/vecgravata2.png",
      //   color: "bg-green-500",
      quantity: 0,
    },
    {
      id: 2,
      name: "Salario Minimo",
      price: 1_412,
      image: "/Esbanjanjavectors/veccarteira.png",
      //   color: "bg-blue-500",
      quantity: 0,
    },
    {
      id: 4,
      name: "Sapato Mocassim",
      price: 8_550,
      image: "/Esbanjanjavectors/vecmocassim.png",
      //   color: "bg-yellow-500",
      quantity: 0,
    },
    {
      id: 9,
      name: "Poltrona Astasi",
      price: 29_650,
      image: "/Esbanjanjavectors/veccadeira.png",
      //   color: "bg-green-500",
      quantity: 0,
    },
    {
      id: 7,
      name: "Poltrona 600K V.704 Revive",
      price: 49_081,
      image: "/Esbanjanjavectors/vecpoltrona.png",
      //   color: "bg-green-500",
      quantity: 0,
    },
    {
      id: 6,
      name: "Sofá Elétrico Portenho",
      price: 63_380,
      image: "/Esbanjanjavectors/vecsofa.png",
      //   color: "bg-green-500",
      quantity: 0,
    },
    {
      id: 10,
      name: "Cama Natuzzi Piuma King",
      price: 64_970,
      image: "/Esbanjanjavectors/veccama.png",
      //   color: "bg-green-500",
      quantity: 0,
    },

    {
      id: 13,
      name: "Roupas de Cama e Banho",
      price: 130_695.36,
      image: "/Esbanjanjavectors/vecroupadecama.png",
      //   color: "bg-green-500",
      quantity: 0,
    },
    {
      id: 11,
      name: "Tapete Burle Marx",
      price: 113_888.82,
      image: "/Esbanjanjavectors/vectapete.png",
      //   color: "bg-green-500",
      quantity: 0,
    },
    {
      id: 15,
      name: "Olimpiadas de Paris",
      price: 236_000,
      image: "/Esbanjanjavectors/vecolimpiadas.png",
      //   color: "bg-green-500",
      quantity: 0,
    },
    {
      id: 14,
      name: "Viagem ao Catar",
      price: 283_300,
      image: "/Esbanjanjavectors/veccatar.png",
      //   color: "bg-green-500",
      quantity: 0,
    },
    {
      id: 12,
      name: "Arvore de Natal e Arranjos de Flores",
      price: 358_400,
      image: "/Esbanjanjavectors/vecarvore.png",
      //   color: "bg-green-500",
      quantity: 0,
    },

    {
      id: 5,
      name: "Viagem para a India",
      price: 2_000_000,
      image: "/Esbanjanjavectors/vecmahal.png",
      //   color: "bg-orange-500",
      quantity: 0,
    },
  ];

  // State for items and total money
  const [items, setItems] = useState<Item[]>(initialItems);
  const [totalMoney, setTotalMoney] = useState(63_036_916.95); // 63.036.916,95

  //   const updateTotalValue = (itemToBuy: Item) => {
  //     const finalValue = totalMoney - itemToBuy.price;
  //     const timer = setInterval(() => {
  //       setTotalMoney((prev) => {
  //         if (prev != finalValue) {
  //           return prev - 0.01;
  //         }
  //         return prev;
  //       });

  //       // setTotalMoney((prev) => prev - itemToBuy.price);
  //     }, 0.1);
  //     if (itemToBuy.price == totalMoney) {
  //       clearInterval(timer);
  //     }
  //   };

  // Function to buy an item
  const buyItem = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );

    // Find the item to subtract its price
    const itemToBuy = items.find((item) => item.id === itemId);
    if (itemToBuy && totalMoney >= itemToBuy.price) {
      //   updateTotalValue(itemToBuy);
      setTotalMoney((prev) => prev - itemToBuy.price);
    }
  };

  // Function to sell an item
  const sellItem = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );

    // Find the item to add its price back
    const itemToSell = items.find((item) => item.id === itemId);
    if (itemToSell && itemToSell.quantity > 0) {
      setTotalMoney((prev) => prev + itemToSell.price);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-800 p-8 text-white">
      {/* <h1 className="mb-8 text-4xl font-bold">
        Esbanje como esbanja a esbanjanja!
      </h1> */}
      <Image
        src={"/janjaquempagaehosoto.jpeg"}
        height={200}
        width={200}
        alt="janja quem paga eh os oto"
      />
      {/* background: linear-gradient(180deg, #2ecc71, #1abc9c); */}
      <div className="sticky top-0 z-10 mb-6 mt-8 w-full rounded-lg bg-gradient-to-r from-[#2ecc71] to-[#1abc9c] text-center align-top text-3xl font-bold md:text-7xl">
        <AnimatedNumber
          value={totalMoney}
          className="text-slate-800"
          duration={0.5}
        />
      </div>
      <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className={`w-80 bg-gray-500 text-white`}>
            <CardContent className="flex h-full w-full flex-col items-center justify-between p-6">
              <Image
                src={item.image}
                width={250}
                height={250}
                alt={item.name}
                className="mb-4 object-contain"
              />
              <div className="mb-2 text-2xl font-bold">{item.name}</div>
              <div className="mb-4 text-4xl font-bold">
                {item.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-red-500 text-white hover:bg-red-600"
                  onClick={() => sellItem(item.id)}
                  disabled={item.quantity === 0}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>

                <span className="mx-2 text-xl font-bold">{item.quantity}</span>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-green-500 text-white hover:bg-green-600"
                  onClick={() => buyItem(item.id)}
                  disabled={totalMoney < item.price}
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
