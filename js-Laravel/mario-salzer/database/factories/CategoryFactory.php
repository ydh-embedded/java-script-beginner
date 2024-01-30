<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $icons = preg_split("/\s+/u", "🎀 🎗️ 👓 🕶️ 🥽 🥼 🦺 👔 👕 👖 🧣 🧤 🧥
        🧦 👗 👘 🥻 🩱 🩲 🩳 👙 👚 🪭 👛 👜 👝 🛍️ 🎒 🩴 👞 👟 🥾
        🥿 👠 👡 🩰 👢 🪮 👑 👒 🎩 🎓 🧢 🪖 ⛑️ 📿 💄 💍 💎 🦯");

        // ist natürlich NICHT UNIQUE bei mehrfachen ::factory() Aufrufen
        static $cats = ["Küche", "Wohnen", "Haus", "Outdoor", "Hobby", "Nachbarn", "Safe", "Urlaub", "Amazon"];
        shuffle($cats);

        return [
            "name" => ucwords($cats ? array_pop($cats) : fake()->word()),
            "desc" => substr(fake()->paragraph(), 0, 200),
            "icon" => $icons[rand(0, count($icons))],
        ];
    }
}
