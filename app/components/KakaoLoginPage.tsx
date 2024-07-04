"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useHydrate from "@/hooks/useHydrate";
import { User } from "@supabase/supabase-js";
import { createSupabaseBrowserClient } from "@/lib/supabase/browserClient";

const KakaoLoginPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const isMount = useHydrate();
  // createSupabaseServerSideClient 왜 안되나
  const supabase = createSupabaseBrowserClient();

  const getUserInfo = useCallback(async () => {
    const result = await supabase.auth.getUser();
    if (result?.data?.user) setUser(result?.data?.user);
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
    console.log(user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!isMount) return null;

  return (
    <div className="mx-auto max-w-[500px]">
      <div className="text-center text-2xl font-bold">PrayU</div>
      {user && (
        <div className="text-center text-xl mt-10">
          Hello {user.user_metadata.name}
          <button onClick={handleLogout} className="border-2 border-black ml-4">
            Logout
          </button>
        </div>
      )}
      <div className="mt-10">
        <Auth
          redirectTo="process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO"
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          onlyThirdPartyProviders
          providers={["kakao"]}
        />
      </div>
    </div>
  );
};

export default KakaoLoginPage;
