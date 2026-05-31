export default function ControlPanel() {
    return (
        <div className="flex items-center justify-between bg-brand-walnut/5 px-3 py-4">
            <div
                className="inline-flex items-center justify-start gap-2"
            >
                <label htmlFor="">
                    <input type="radio" name="" id="" />
                    Uzywane
                </label>
                <label htmlFor="">
                    <input type="radio" name="" id="" />
                    Nowe
                </label>
            </div>
            <div>
                Sortuj
                <select name="" id="">
                    <option value="">Cena od najnizszej</option>
                    <option value="">Cena od najwyzszej</option>
                    <option value="">Domyslne</option>
                </select>
            </div>
        </div>
    )
}