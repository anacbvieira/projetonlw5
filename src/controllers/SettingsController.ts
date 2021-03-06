import { Request, Response} from "express"
import { getCustomRepository } from "typeorm"
import { SettingRepository } from "../repositories/SettingRepository"

class SettingsController {
    async create ( request: Request, response: Response ) {
        const { chat, username } = request.body
    const settingRepository = getCustomRepository(SettingRepository)

    const settings = settingRepository.create({
        chat,
        username
    })

    await settingRepository.save(settings)

    return response.json( settings )
    }
}

export { SettingsController }