export type VATSIMData = {
  general: FeedGeneralData;
  pilots: FeedPilot[];
  controllers: FeedController[];
  atis: FeedATIS[];
  servers: FeedServers[];
  prefiles: FeedPrefiles[];
  facilities: FeedFacilities[];
  ratings: FeedRating[];
  pilot_ratings: FeedRating[];
  military_ratings: FeedRating[];
};

export type FeedGeneralData = {
  version: number;
  update_timestamp: Date;
  connected_clients: number;
  unique_users: number;
};

export type FeedPilot = {
  cid: number;
  name: string;
  callsign: string;
  server: string;
  pilot_rating: string;
  military_rating: string;
  latitude: number;
  longitude: number;
  altitude: number;
  groundspeed: number;
  transponder: string;
  heading: number;
  qnh_i_hg: number;
  qnh_mb: number;
  flight_plan: FlightPlan;
  logon_time: string;
  last_updated: string;
};

export type FlightPlan = {
  flight_rules: FlightRules;
  aircraft: string;
  aircraft_faa: string;
  aircraft_short: string;
  departure: string;
  arrival: string;
  alternate: string;
  deptime: string;
  enroute_time: string;
  fuel_time: string;
  remarks: string;
  route: string;
  revision_id: number;
  assigned_transponder: string;
};

export type FeedController = {
  cid: number;
  name: string;
  callsign: string;
  frequency: string;
  facility: number;
  rating: number;
  server: string;
  visual_range: number;
  text_atis: string[];
  last_updated: Date;
  logon_time: Date;
};

export type FeedATIS = {
  cid: number;
  name: string;
  callsign: string;
  frequency: string;
  facility: number;
  rating: number;
  server: string;
  visual_range: number;
  atis_code: string;
  text_atis: string[];
  last_updated: Date;
  logon_time: Date;
};

export type FeedServers = {
  ident: string;
  hostname_or_ip: string;
  location: string;
  name: string;
  client_connections_allowed: boolean;
  is_sweatbox: boolean;
};

export type FeedPrefiles = {
  cid: number;
  name: string;
  callsign: string;
  flight_plan: FlightPlan;
  last_updated: Date;
};

export type FeedFacilities = {
  id: number;
  short: string;
  long_name: string;
};

export type FeedRating = {
  id: number;
  short_name: string;
  long_name: string;
};

export enum FlightRules {
  'V',
  'I',
}

export type Airport = {
  site_number: string;
  type: string;
  facility_name: string;
  faa_ident: string;
  icao_ident: string;
  district_office: string;
  state: string;
  state_full: string;
  county: string;
  city: string;
  ownership: string;
  use: string;
  manager: string;
  manager_phone: string;
  latitude: string;
  latitude_sec: string;
  longitude: string;
  longitude_sec: string;
  elevation: string;
  magnetic_variation: string;
  tpa: string;
  vfr_sectional: string;
  boundary_artcc: string;
  boundary_artcc_name: string;
  responsible_artcc: string;
  responsible_artcc_name: string;
  fss_phone_number: string;
  fss_phone_numer_tollfree: string;
  notam_facility_ident: string;
  status: string;
  certification_typedate: string;
  customs_airport_of_entry: string;
  military_joint_use: string;
  military_landing: string;
  lighting_schedule: string;
  beacon_schedule: string;
  control_tower: string;
  unicom: string;
  ctaf: string;
  effective_date: string;
};

export type ATCStation = {
  callsign: string;
  name: string;
  frequency: string;
  ctaf: boolean;
};
