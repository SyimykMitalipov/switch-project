export type PercentVariants = 'default' | 'pit' // pit = personal income tax = НДФЛ

const percent = 0.13

type PercentSumKeys = 'firstLine' | 'withPercent' | 'lastLine';

export const percentSum  = (sum: number, pit: PercentVariants) => {
    const percentTotal = Math.ceil(sum * percent)
    switch(pit) {
        case 'default': 

        const totalSumDefault  = sum + percentTotal;
        
        const returnDefault: Record<PercentSumKeys, number> = {
            firstLine: sum,
            withPercent: percentTotal,
            lastLine: totalSumDefault
        }
        return returnDefault;
        case 'pit':
            const totalSumPit = sum  - percentTotal;

            const returnPit: Record<PercentSumKeys, number> =  {
                firstLine: totalSumPit,
                withPercent: percentTotal,
                lastLine: sum,
            }
            return returnPit
    }
}