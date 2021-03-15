import useSWR from "swr";

export default function useEvents(user: any) {
  const { data: events } = useSWR(user?.isLoggedIn && `/api/auth/events`);

  const loadingEvents = events === undefined;

  return { events, loadingEvents };
}