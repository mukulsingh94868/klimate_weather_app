import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
    
    return (
        <div className="space-y-4">
            {/* <FavoriteCities /> */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold tracking-tight">My Location</h1>
                <Button
                    variant="outline"
                    size="icon"
                    // onClick={handleRefresh}
                    // disabled={weatherQuery.isFetching || forecastQuery.isFetching}
                >
                    <RefreshCw className={`h-4 w-4`} />
                </Button>
            </div>

            <div className="grid gap-6">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* <CurrentWeather
                        data={weatherQuery.data}
                        locationName={locationName}
                    />
                    <HourlyTemperature data={forecastQuery.data} /> */}
                </div>

                <div className="grid gap-6 md:grid-cols-2 items-start">
                    {/* <WeatherDetails data={weatherQuery.data} />
                    <WeatherForecast data={forecastQuery.data} /> */}
                </div>
            </div>
        </div>
    )
};

export default WeatherDashboard;