import { CustomerDetails } from "../serviceclass/customerDetails";
import { PassengerDetails } from "../serviceclass/passengerDetails";
import { SeatBookDetails } from "../serviceclass/seatBookDetails";
import { TicketDetails } from "../serviceclass/ticketDetails";
export class BookTicket{

    customerDetails:CustomerDetails;
    passengerDetails:PassengerDetails[];
    seatDetails:SeatBookDetails[];
   ticketDetails:TicketDetails;


}