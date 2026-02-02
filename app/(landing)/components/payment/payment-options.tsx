import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { getAllBanks } from "@/app/services/bank.service";

const paymentList =[
    {
        bank_name: "BCA",
        account_number : 1234567809,
        account_holder :"PT SportOn Digital"
    },
    {
        bank_name: "Mandiri",
        account_number : 468869664,
        account_holder :"PT SportOn Digital"
    },
    {
        bank_name: "BRI",
        account_number : 345678999,
        account_holder :"PT SportOn Digital"
    },
]
const PaymentOptions = async() => {
    const banks = await getAllBanks();

    return (
        <CardWithHeader title="Payment Options">
            {
                banks.map((payment,index) => (
                    <div className="flex gap-5 p-5 border border-gray-100" key={index}>
                        <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                            <FiCreditCard size={24}/>
                        </div>
                        <div className="self-center">
                            <div className="font-bold"> {payment.bankName} </div>
                            <div className="text-sm"> {payment.accountNumber} </div>
                            <div className="text-sm opacity-40"> {payment.accountName} </div>
                        </div>
                        <div className="ml-auto bg-blue-50 text-gray-500 text-xs h-fit self-center px-2 py-1">Bank Transfer</div>
                    </div>
                ))
            }

        </CardWithHeader>
    )
}

export default PaymentOptions;