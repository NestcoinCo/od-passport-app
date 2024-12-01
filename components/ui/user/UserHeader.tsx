"use client";
import { motion } from "framer-motion";
import { Separator } from "../separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Config, UseAccountReturnType, useDisconnect } from "wagmi";
import { Squash as Hamburger } from "hamburger-react";
import { useCountUp } from "@/components/hooks/useCountUp";
import { useState } from "react";
import { useEnsProfile } from "@/components/hooks/useEnsProfile";
import { adminAddresses } from "@/lib/constants";
import { Attestation } from "@/lib/eas/types";
import Link from "next/link";

interface UserHeaderProps {
  account: UseAccountReturnType<Config>;
  userAttestations: Attestation[];
}

export default function UserHeader({
  account,
  userAttestations,
}: UserHeaderProps) {
  const router = useRouter();
  const { disconnect } = useDisconnect();
  const userAttestationsCount = useCountUp(userAttestations.length, 2000);
  const { ensProfile, loadingProfile } = useEnsProfile(account.address!);
  const [isOpen, setIsOpen] = useState(false);

  const isAdmin = account.address && adminAddresses.includes(account.address);

  return (
    <>
      <motion.div
        className="flex flex-row justify-between items-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-2xl font-black text-start text-black">
            GM Dreamer!👋
          </h1>
          {userAttestations.length ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-start text-black"
            >
              You currently hold{" "}
              <span>
                {userAttestationsCount +
                  (userAttestationsCount !== 1 ? " badges" : " badge")}
              </span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-skeleton h-5 w-40 rounded-md animate-pulse"
            />
          )}
        </div>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <div className="flex justify-center items-center h-full cursor-pointer">
              {isAdmin ? (
                <Hamburger
                  rounded
                  toggled={isOpen}
                  toggle={setIsOpen}
                  color="#1A1AFF"
                />
              ) : !loadingProfile ? (
                <img
                  src={ensProfile?.avatar ?? "/propic_placeholder.png"}
                  alt="User avatar"
                  className="w-12 h-12 rounded-full object-cover border-[1px] border-secondary"
                />
              ) : (
                <div className="w-12 h-12 rounded-full animate-pulse bg-skeleton" />
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {isAdmin && (
              <>
                <DropdownMenuItem className="cursor-pointer w-full">
                  <Link href="/user/new-schema" className="w-full">
                    New Schema
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer w-full">
                  <Link href="/user/new-badge" className="w-full">
                    New Badge
                  </Link>
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => disconnect()}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
      <Separator />
    </>
  );
}
