import '@testing-library/jest-dom/vitest'
import * as matchers from 'jest-extended'
import {expect} from "vitest";

process.env.TZ = 'Asia/Tokyo'

expect.extend(matchers)