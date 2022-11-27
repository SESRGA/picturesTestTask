import venerasBorning from "../images/venerasBorning.png"
import secretEvening from "../images/secretEvening.png"
import adamsCreating from "../images/adamsCreating.png"
import anatomyLesson from "../images/anatomyLesson.png"

export const PicturesData: PicturesDataType[] = [
    {
      picturesName: 'Рождение Венеры',
      id: 1,
      painter: 'Сандро Боттичелли',
      currentPrice: 1000000,
      previousPrice: 2000000,
      img: venerasBorning,
      sold: false,
    },
    {
      picturesName: 'Тайная вечеря',
      id: 2,
      painter: ' Леонардо да Винчи',
      currentPrice: 3000000,
      img: secretEvening,
      sold: false,
    },
    {
      picturesName: 'Сотворение Адама',
      id: 3,
      painter:'Микеланджело',
      currentPrice: 5000000,
      previousPrice: 6000000,
      img: adamsCreating,
      sold: false,
    },
    {
      picturesName: 'Урок анатомии',
      id: 4,
      painter: 'Рембрандт',
      img: anatomyLesson,
      sold: true,
    }
  ]

export type PicturesDataType = {
  picturesName: string,
  id: number,
  painter: string,
  currentPrice?: number,
  previousPrice?: number,
  img: string,
  sold: boolean,
}