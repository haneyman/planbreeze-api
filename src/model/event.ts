// id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
// description text,
// event_date timestamp with time zone,
// date_added timestamp with time zone DEFAULT '2022-06-19 17:01:56.664269+00'::timestamp with time zone,
// blob text,
// category text,
// priority integer
type dbEvent = {
  id: number;
  description: string;
  event_date: Date;
  date_added: Date;
  blob: string;
  category: string;
  priority: number;
};
