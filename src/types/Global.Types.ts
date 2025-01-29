import { SerializedError } from "@reduxjs/toolkit";
import { BaseQueryApi, DefinitionType } from "@reduxjs/toolkit/query";
import React from "react";

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TCommonResponseData = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TCustomError = {
  data: {
    message: string;
    success: boolean;
    stack?: string;
    error?: string;
    errorSources?: Record<string, string>[];
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TCustomError;
  meta?: TMeta;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TResponseError = {
  error: DefinitionType | SerializedError | TCustomError | undefined;
};

export type TQueryParam = {
  key: string;
  value: boolean | React.Key;
};
