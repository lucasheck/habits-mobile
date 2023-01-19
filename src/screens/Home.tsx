import { View, Text, ScrollView } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill =
	minimumSummaryDatesSizes - datesFromYearStart.length + 1;

export function Home() {
	return (
		<>
			<View className="flex-1 bg-background p-8 pt-16">
				<Header />
				<View className="flex-row mt-6 mb-2">
					{weekDays.map((day, i) => {
						return (
							<Text
								key={`${day}-${i}`}
								className="text-zinc-400 text-xl font-bold text-center mx-1"
								style={{ width: DAY_SIZE, height: DAY_SIZE }}
							>
								{day}
							</Text>
						);
					})}
				</View>

				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 100 }}
				>
					<View className="flex-row flex-wrap">
						{datesFromYearStart.map((date) => (
							<HabitDay key={date.toString()} />
						))}
						{amountOfDaysToFill &&
							Array.from({ length: amountOfDaysToFill }).map(
								(_, index) => (
									<View
										key={index}
										className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
										style={{
											width: DAY_SIZE,
											height: DAY_SIZE,
										}}
									/>
								)
							)}
					</View>
				</ScrollView>
			</View>
		</>
	);
}
