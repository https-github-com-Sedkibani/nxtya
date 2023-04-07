<?php

namespace App\Nova\Actions;

use Illuminate\Support\Facades\URL;
use Laravel\Nova\Actions\Action;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\LaravelNovaExcel\Actions\DownloadExcel;
use Laravel\Nova\Http\Requests\ActionRequest;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Maatwebsite\Excel\Facades\Excel;

class ExportUsers extends DownloadExcel implements WithMapping
{


  public function handle(ActionRequest $request, Action $exportable): array
  {
    $response = Excel::download(
      $exportable,
      $this->getFilename(),
      $this->getWriterType()
    );

    if (!$response instanceof BinaryFileResponse || $response->isInvalid()) {
      return \is_callable($this->onFailure)
        ? ($this->onFailure)($request, $response)
        : Action::danger(__('Resource could not be exported.'));