import '@testing-library/jest-dom';
import * as matchers from 'jest-extended'
import {expect} from "vitest";

process.env.TZ = 'Asia/Tokyo'
expect.extend(matchers)