import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VestingSchedule() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Create a Vesting Schedule
          </h1>

          <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div>
              <Label htmlFor="receiver-address">Receiver's Address</Label>
              <Input
                id="receiver-address"
                placeholder="Enter the wallet address"
                className="w-full"
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <Label htmlFor="token-select">Select Token</Label>
                <Select>
                  <SelectTrigger id="token-select">
                    <SelectValue placeholder="Select token" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                    <SelectItem value="usdt">USDT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label htmlFor="vesting-start-date">Vesting Start Date</Label>
                <Input id="vesting-start-date" type="date" className="w-full" />
              </div>
            </div>

            <div>
              <Label htmlFor="total-tokens">Total Tokens to Vest</Label>
              <Input
                id="total-tokens"
                type="number"
                placeholder="Enter total tokens"
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="vesting-period">
                Total Vesting Period (in days)
              </Label>
              <Input
                id="vesting-period"
                type="number"
                placeholder="Enter vesting period"
                className="w-full"
              />
            </div>

            <Button className="w-full">Create Vesting Schedule</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
