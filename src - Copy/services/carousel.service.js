import {apiRequest} from "./core-api.service";

class CarouselService {
    static getSlides(slides, cb = () => undefined) {
        apiRequest("carousel", 'GET', {}, {slides}).then(axioResponse => {
            console.log(axioResponse)
            if (axioResponse.data.status) {
                cb(axioResponse.data.slides);
            }
        }).catch(() => {
        })
    }
}

export {CarouselService};