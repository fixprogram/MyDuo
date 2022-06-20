import { useMatches } from "@remix-run/react";
import { useEffect, useMemo, useRef } from "react";

import type { User } from "~/models/user.server";

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}

function isUser(user: any): user is User {
  return user && typeof user === "object" && typeof user.username === "string";
}

export function useOptionalUser(): User | undefined {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return undefined;
  }
  return data.user;
}

export function useUser(): User {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  }
  return maybeUser;
}

export function validateUsername(username: unknown): username is string {
  return typeof username === "string" && username.length > 3;
}

export const useFocus = (dependency) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // if (!document.activeElement) {
    //   ref.current?.focus();
    // }
    // if (dependency) {
    // }
    return ref.current?.focus();
  }, [dependency]);

  return ref;
};

export const isItemInArray = (arr: string[], item: string) => {
  return arr.find((arrItem) => arrItem === item);
  // return arr.find((arrItem) => {
  //   const { newItem } = doesItemContainSign(arrItem);
  //   return newItem === item;
  // });
};

export const findInArrayById = (arr = [{ id: "" }], id: string) => {
  return arr.find((arrItem) => (arrItem.id = id));
};

export const doesItemContainSign = (item: string) => {
  const newItem = item.split("").slice(0, -1).join("");
  switch (item.slice(-1)) {
    case ",": {
      return {
        newItem,
        sign: ",",
      };
    }
    case ".": {
      return {
        newItem,
        sign: ".",
      };
    }
    case "?": {
      return {
        newItem,
        sign: "?",
      };
    }
    case "!": {
      return {
        newItem,
        sign: "!",
      };
    }
    default: {
      return { newItem: item, sign: "" };
    }
  }
};

export const doesArrayContainItems = (items: string[], arr: string[]) => {
  const filtered = arr.filter((arrItem: string) =>
    items.find(
      (item: string) =>
        item.trim().toLocaleLowerCase() === arrItem.trim().toLowerCase()
    )
  );
  return {
    state: !!filtered.length,
    length: filtered.length,
    items: filtered,
    // formatted: filtered.map((item) => item.trim().toLowerCase()),
    formatted: filtered.map((item) => item.trim()),
  };
};

export const getWeekDay = () => {
  return getShortWeekday(new Date());
};

export const getYesterdayDay = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1);

  return getShortWeekday(today);
};

function getShortWeekday(day: Date) {
  return day.toLocaleDateString("en-US", {
    weekday: "short",
  }) as string;
}

export const getCurrentWeek = () => {
  const week = [];

  for (let i = 6; i >= 0; i--) {
    const today = new Date();
    today.setDate(today.getDate() - i);
    week.push(getShortWeekday(today));
  }

  return week;
};

export const areArraysEqual = (arr1: string[], arr2: string[]) => {
  if (arr1.length !== arr2.length) {
    false;
  }
  const filtered = arr1.filter((arr1Item, idx) => arr1Item === arr2[idx]);
  return filtered.length === arr1.length;
};

export const getTodayDate = () => {
  const today = new Date();

  return today.getFullYear() + today.getUTCMonth() + today.getDate();
};
