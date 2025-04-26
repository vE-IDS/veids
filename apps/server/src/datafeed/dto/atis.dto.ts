export default interface ATIS {
    airport: string;
    information?: string;
    metar: string;
    status?: string;
    facility: string;
    activeApproaches?: string[];
    activeDepartures?: string[];
}