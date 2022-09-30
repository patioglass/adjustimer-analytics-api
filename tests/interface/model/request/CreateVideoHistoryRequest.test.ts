import { CreateVideoHistoryRequest } from '../../../../src/interface/model/request/CreateVideoHistoryRequest'

describe("interface", (): void => {
    describe("post requestBody function validate()", (): void => {
        
        it("正常系", (): void => {
            const params = {
                video_title: "お嬢さん-字幕版-キム・ミニ",
                video_service_type: 0,
                video_url: "https://www.amazon.co.jp/%E3%81%8A%E5%AC%A2%E3%81%95%E3%82%93-%E5%AD%97%E5%B9%95%E7%89%88-%E3%82%AD%E3%83%A0%E3%83%BB%E3%83%9F%E3%83%8B/dp/B074TZBKK1/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%81%8A%E5%AC%A2%E3%81%95%E3%82%93&qid=1664530002&qu=eyJxc2MiOiIxLjg0IiwicXNhIjoiMC41NCIsInFzcCI6IjEuNjQifQ%3D%3D&s=instant-video&sr=1-1",
                user_id: "user_id"
            }

            expect(new CreateVideoHistoryRequest(params).validate()).toBe(true)
        })
        it("動画タイトルが空", (): void => {
            const params = {
                video_title: "",
                video_service_type: 0,
                video_url: "https://www.amazon.co.jp/%E3%81%8A%E5%AC%A2%E3%81%95%E3%82%93-%E5%AD%97%E5%B9%95%E7%89%88-%E3%82%AD%E3%83%A0%E3%83%BB%E3%83%9F%E3%83%8B/dp/B074TZBKK1/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%81%8A%E5%AC%A2%E3%81%95%E3%82%93&qid=1664530002&qu=eyJxc2MiOiIxLjg0IiwicXNhIjoiMC41NCIsInFzcCI6IjEuNjQifQ%3D%3D&s=instant-video&sr=1-1",
                user_id: "user_id"
            }

            expect(new CreateVideoHistoryRequest(params).validate()).toBe(false)
        })
        it("動画タイプが範囲外(大)", (): void => {
            const params = {
                video_title: "お嬢さん-字幕版-キム・ミニ",
                video_service_type: 7,
                video_url: "https://www.amazon.co.jp/%E3%81%8A%E5%AC%A2%E3%81%95%E3%82%93-%E5%AD%97%E5%B9%95%E7%89%88-%E3%82%AD%E3%83%A0%E3%83%BB%E3%83%9F%E3%83%8B/dp/B074TZBKK1/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%81%8A%E5%AC%A2%E3%81%95%E3%82%93&qid=1664530002&qu=eyJxc2MiOiIxLjg0IiwicXNhIjoiMC41NCIsInFzcCI6IjEuNjQifQ%3D%3D&s=instant-video&sr=1-1",
                user_id: "user_id"
            }

            expect(new CreateVideoHistoryRequest(params).validate()).toBe(false)
        })
        it("動画タイプが範囲外(0より小さい)", (): void => {
            const params = {
                video_title: "お嬢さん-字幕版-キム・ミニ",
                video_service_type: -1,
                video_url: "https://www.amazon.co.jp/%E3%81%8A%E5%AC%A2%E3%81%95%E3%82%93-%E5%AD%97%E5%B9%95%E7%89%88-%E3%82%AD%E3%83%A0%E3%83%BB%E3%83%9F%E3%83%8B/dp/B074TZBKK1/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%81%8A%E5%AC%A2%E3%81%95%E3%82%93&qid=1664530002&qu=eyJxc2MiOiIxLjg0IiwicXNhIjoiMC41NCIsInFzcCI6IjEuNjQifQ%3D%3D&s=instant-video&sr=1-1",
                user_id: "user_id"
            }

            expect(new CreateVideoHistoryRequest(params).validate()).toBe(false)
        })
        it("動画URLがURLの形式ではない", (): void => {
            const params = {
                video_title: "お嬢さん-字幕版-キム・ミニ",
                video_service_type: 0,
                video_url: "hogehoge",
                user_id: "user_id"
            }

            expect(new CreateVideoHistoryRequest(params).validate()).toBe(false)
        })
    })
})